export type Destination = {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
};

export type DestinationFilters = {
  category: string | null;
  price: string | null;
  sort: string | null;
};

export type SelectOption = {
  value: string;
  label: string;
};

// Shape of the documents returned by the express API (http://localhost:8000/destination)
type ApiDestination = {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  country?: string;
  location?: string;
  category?: string;
  price?: string | number;
  duration?: string;
  rating?: string | number;
  image?: string;
  imageUrl?: string;
};

const API_URL = "http://localhost:8000/destination";

export const categoryOptions: SelectOption[] = [
  { value: "all", label: "All Categories" },
  { value: "beach", label: "Beach" },
  { value: "mountain", label: "Mountain" },
  { value: "city", label: "City" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
];

export const priceOptions: SelectOption[] = [
  { value: "all", label: "All Prices" },
  { value: "0-1000", label: "Under $1,000" },
  { value: "1000-3000", label: "$1,000 - $3,000" },
  { value: "3000-plus", label: "$3,000 & Above" },
];

export const sortOptions: SelectOption[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

export async function fetchDestinations(): Promise<Destination[]> {
  try {
    // Live data on every request — destinations change whenever a user
    // adds one, so this must never be baked into a build-time snapshot.
    const res = await fetch(API_URL, { cache: "no-store" });

    if (!res.ok) {
      return [];
    }

    const data: unknown = await res.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return (data as ApiDestination[]).map((item, index) =>
      normalizeDestination(item, index)
    );
  } catch {
    // API unreachable (server not running) — show an empty list instead of crashing.
    return [];
  }
}

function normalizeDestination(item: ApiDestination, index: number): Destination {
  return {
    id: String(item._id ?? item.id ?? index),
    title: item.name ?? item.title ?? "Untitled Destination",
    location: item.country ?? item.location ?? "Unknown location",
    category: item.category ?? "",
    price: Number(item.price ?? 0),
    duration: item.duration ?? "",
    rating: Number(item.rating ?? 4.5),
    image: item.image ?? item.imageUrl ?? "",
  };
}

export function applyFilters(
  destinations: Destination[],
  filters: DestinationFilters
): Destination[] {
  let result = destinations;

  if (filters.category && filters.category !== "all") {
    const category = filters.category;
    result = result.filter((destination) => destination.category === category);
  }

  if (filters.price && filters.price !== "all") {
    const price = filters.price;
    result = result.filter((destination) => {
      if (price === "0-1000") return destination.price < 1000;
      if (price === "1000-3000")
        return destination.price >= 1000 && destination.price < 3000;
      if (price === "3000-plus") return destination.price >= 3000;
      return true;
    });
  }

  if (filters.sort === "price-asc") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-desc") {
    result = [...result].sort((a, b) => b.price - a.price);
  } else if (filters.sort === "name-asc") {
    result = [...result].sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
}
