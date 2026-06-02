interface ContainerProps {
  children: React.ReactNode;
}

export function ContainerFluid({ children }: ContainerProps) {
  return <div className="w-full px-4">{children}</div>;
}
