"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  categoryOptions,
  priceOptions,
  sortOptions,
  type DestinationFilters,
  type SelectOption,
} from "@/lib/destinations";

type DestinationsFilterProps = {
  filters: DestinationFilters;
  onChange: (filters: DestinationFilters) => void;
};

// `h-11!` — the trigger's built-in `data-[size=default]:h-8` has a higher
// specificity, so the height override needs Tailwind's important modifier.
const triggerClass =
  "h-11! w-full rounded-sm border-slate-200 bg-white px-4 text-[13px] font-normal text-slate-700 shadow-sm";

function FilterSelect({
  placeholder,
  options,
  value,
  onValueChange,
}: {
  placeholder: string;
  options: SelectOption[];
  value: string | null;
  onValueChange: (value: string | null) => void;
}) {
  return (
    <Select items={options} value={value} onValueChange={onValueChange}>
      <SelectTrigger className={triggerClass}>
        <SelectValue
          placeholder={placeholder}
          className={
            value
              ? "text-slate-700"
              : "text-xs font-normal tracking-wider text-slate-400 uppercase"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function DestinationsFilter({
  filters,
  onChange,
}: DestinationsFilterProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-2 md:px-6 md:pt-14">
      <h1 className="text-3xl leading-tight font-light tracking-tight text-[#0b1b24] md:text-[40px]">
        Explore All Destinations
      </h1>
      <p className="mt-2 text-[13px] font-light text-[#6b7a85]">
        Find your perfect travel experience from our curated collection
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <FilterSelect
          placeholder="Category"
          options={categoryOptions}
          value={filters.category}
          onValueChange={(value) => onChange({ ...filters, category: value })}
        />
        <FilterSelect
          placeholder="Price Range"
          options={priceOptions}
          value={filters.price}
          onValueChange={(value) => onChange({ ...filters, price: value })}
        />
        <FilterSelect
          placeholder="Sort By"
          options={sortOptions}
          value={filters.sort}
          onValueChange={(value) => onChange({ ...filters, sort: value })}
        />
      </div>
    </section>
  );
}
