"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 mx-auto z-50 bg-white px-16",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <div className="logo">
          <Image
            src={"/logo.png"}
            width={200}
            height={50}
            alt="Calmcoder Logo"
          />
        </div>
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Digital Marketing"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Social Media Marketing</HoveredLink>
              <HoveredLink href="/interface-design">
                Local SEO Agency
              </HoveredLink>
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
              <HoveredLink href="/interface-design">
                Local SEO Agency
              </HoveredLink>
              <HoveredLink href="/seo">
                Wordpress Website Development
              </HoveredLink>
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
          <Link href={"/"}>
            <button className="bg-lime-400 hover:bg-teal-900 hover:text-lime-300 transition-colors py-2 px-4 rounded-3xl">
              Get in touch
            </button>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
