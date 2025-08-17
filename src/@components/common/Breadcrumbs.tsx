import Link from "next/link";
import React from "react";
import {ChevronRight} from 'lucide-react'

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="text-xs sm:text-sm py-2" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.href && item.href !== "" && idx !== items.length - 1 ? (
              <Link
                href={item.href}
                className="text-gray-500 underline font-medium hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-semibold">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <span className="mx-1 sm:mx-2 text-primary font-bold"><ChevronRight height={16} width={16} /></span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
