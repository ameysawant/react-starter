import { cn } from "@/shared/utils/utils";

export const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h1 className={cn("text-4xl font-extrabold", className)}>{children}</h1>;
};

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h2 className={cn("text-3xl font-semibold", className)}>{children}</h2>;
};

export const H3 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={cn("text-2xl font-semibold", className)}>{children}</h3>;
};

export const H4 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h4 className={cn("text-xl font-semibold", className)}>{children}</h4>;
};

export const H5 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h5 className={cn("text-lg font-semibold", className)}>{children}</h5>;
};

export const H6 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h6 className={cn("text-base font-semibold", className)}>{children}</h6>;
};

export const P = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn("text-sm text-gray-400", className)}>{children}</p>;
};

export const Span = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <span className={cn("text-sm text-gray-400", className)}>{children}</span>;
};
