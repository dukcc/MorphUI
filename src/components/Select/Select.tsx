import React, { ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

export const Select = ({
  label,
  children,
  defaultValue,
  value,
  onValueChange,
  defaultOpen,
  open,
  onOpenChange,
  name,
  disabled,
  required,
}: {
  label: string;
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}) => {
  return (
    <RadixSelect.Root
      defaultValue={defaultValue}
      defaultOpen={defaultOpen}
      value={value}
      onValueChange={onValueChange}
      open={open}
      onOpenChange={onOpenChange}
      name={name}
      disabled={disabled}
      required={required}
    >
      <RadixSelect.Trigger
        className="inline-flex items-center justify-center text-body rounded-in h-fit px-24 py-12 gap-32 bg-fg border-stroke-2 text-text-1 shadow-fg"
        aria-label={label}
      >
        <RadixSelect.Value placeholder={label} />
        <RadixSelect.Icon>
          <HiChevronDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="overflow-hidden bg-fg rounded-in backdrop-blur-main border border-stroke-2 shadow-fg text-text-1 rounded-md">
          <RadixSelect.ScrollUpButton className="flex items-center justify-center h-fit py-6 bg-fg backdrop-blur-sm cursor-default border-b border-stroke-2">
            <HiChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="flex flex-col gap-16 px-24 py-12">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center h-fit py-6 bg-fg backdrop-blur-sm cursor-default border-t border-stroke-2">
            <HiChevronDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RadixSelect.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className="text-body leading-none text-text-1 flex items-center h-fit relative select-none cursor-pointer data-[disabled]:text-text-disabled radix-disabled:pointer-events-none radix-highlighted:outline-none radix-highlighted:text-selected radix-state-checked:text-selected duration-150 ease-out transition-colors"
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

export const SelectGroup = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Group className="flex flex-col gap-12">
      {children}
    </RadixSelect.Group>
  );
};

export const SelectLabel = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Label className="text-sub text-text-subtle">
      {children}
    </RadixSelect.Label>
  );
};

export const SelectSeparator = () => {
  return <RadixSelect.Separator className="h-[1px] w-full bg-white/10" />;
};
