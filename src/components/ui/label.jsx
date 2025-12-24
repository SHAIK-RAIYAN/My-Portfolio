// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";
import { cn } from "../../utils/accernity";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm leading-none font-medium text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white",
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
