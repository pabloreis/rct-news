import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...linkProps
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === linkProps.href ? activeClassName : '';

  return (
    <Link {...linkProps}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
