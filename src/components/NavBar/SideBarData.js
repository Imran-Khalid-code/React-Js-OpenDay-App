import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
export const SideBarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Contents",
		path: "/contents",
		icon: <IoDocumentOutline />,
		cName: "nav-text",
	},

	// {
	// 	title: "courses",
	// 	path: "/",
	// 	icon: <IoIcons.IoMdPeople />,
	// 	cName: "nav-text",
	// },
	// {
	// 	title: "Messages",
	// 	path: "/",
	// 	icon: <FaIcons.FaEnvelopeOpenText />,
	// 	cName: "nav-text",
	// },
	// {
	// 	title: "Support",
	// 	path: "/",
	// 	icon: <IoIcons.IoMdHelpCircle />,
	// 	cName: "nav-text",
	//},
];
