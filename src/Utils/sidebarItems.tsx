import React from 'react'
import type { TSidebarItem } from './generateSidebarItems'
import { TfiLayoutGrid2 } from 'react-icons/tfi'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { MdOutlineDriveFolderUpload } from 'react-icons/md'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { RiHandCoinLine } from 'react-icons/ri'
import { IoReceiptOutline, IoSettingsOutline } from 'react-icons/io5'
import { CiSettings } from 'react-icons/ci'

const sidebarItems: TSidebarItem[] = [
    {
        key: '/',
        label: 'Analytics',
        path: '/',
        icon: <TfiLayoutGrid2 size={24} />
    },
    {
        key: '/staff-list',
        label: 'Staff List',
        path: '/staff-list',
        icon: <FaRegUser size={24} />
    },
    {
        key: 'clients-details',
        label: 'Clients Details',
        path: '/clients-details',
        icon: <HiOutlineUserGroup size={24} />
    },
    {
        key: 'quote-update',
        label: 'Quote Update',
        path: '/quote-update',
        icon: <MdOutlineDriveFolderUpload size={24} />
    },
    {
        key: 'quote-history',
        label: 'Quote History',
        path: '/quote-history',
        icon: <FaArrowRightArrowLeft  size={24} />
    },
    {
        key: 'raw-materials',
        label: 'Raw Materials',
        path: '/raw-materials',
        icon: <RiHandCoinLine size={24} />
    },
    {
        key: 'standard-receipts',
        label: 'Standard Receipts',
        path: '/standard-receipts',
        icon: <IoReceiptOutline size={24} />
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <IoSettingsOutline size={24} />,
        children: [
            {
                key: 'submenu1',
                label: 'Submenu 1',
                path: '/settings/submenu1',
                icon: <CiSettings  size={24} />
            },
            {
                key: 'submenu2',
                label: 'Submenu 1',
                path: '/settings/submenu2',
                icon: <CiSettings size={24} />
            },
        ]
    },
]

export default sidebarItems