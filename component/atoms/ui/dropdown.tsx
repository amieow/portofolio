import React from 'react';
import { DropdownMenu } from "radix-ui";
import { NAVBAR_MENU } from '@/contents/Navigation';
import Link from 'next/link';

const DropdownNavBar = () => {
  return (
    <nav className="navbar">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="dropdown-trigger">
          Menu
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="dropdown-content">
          {NAVBAR_MENU.map((v) => (
            <DropdownMenu.Item className="dropdown-item">
              <Link href={v.link}>{v.title}</Link>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="dropdown-separator" />
          <DropdownMenu.Item className="dropdown-item">HELLO</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </nav >
  );
};

export default DropdownNavBar;
