"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-0 inset-x-0 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Digital Marketing"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Social Media Marketing</HoveredLink>
            <HoveredLink href="/interface-design">Local SEO Agency</HoveredLink>
            <HoveredLink href="/seo">Lead Generation Services</HoveredLink>
            <HoveredLink href="/branding">
              Search Engine Optimization
            </HoveredLink>
            <HoveredLink href="/branding">
              Buy High-Quality Backlink India
            </HoveredLink>
            <HoveredLink href="/branding">
              Franchise SEO Services India
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Design & Development"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">
              Website Design & Development
            </HoveredLink>
            <HoveredLink href="/interface-design">Local SEO Agency</HoveredLink>
            <HoveredLink href="/seo">Wordpress Website Development</HoveredLink>
            <HoveredLink href="/branding">Graphics Design</HoveredLink>
            <HoveredLink href="/branding">
              E-Commerce Website Development
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Us</HoveredLink>
            <HoveredLink href="/interface-design">Career</HoveredLink>
            <HoveredLink href="/seo">Blog</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
