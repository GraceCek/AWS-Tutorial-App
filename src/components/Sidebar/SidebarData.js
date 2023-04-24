import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Courses',
        path: '/Overview',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Introduction',
                path: '/Overview/Introduction',
                icon: <AiIcons.AiFillHome />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
            },
            {
                title: 'AWS Free Tier Account Setup',
                path: '/Overview/Setup',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Amazon Elastic Compute Cloud (EC2)',
                path: '/Overview/EC2',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Amazon Simple Storage Service (S3)',
                path: '/Overview/S3',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Amazon Lambda',
                path: '/Overview/Lambda',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
];