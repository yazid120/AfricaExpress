import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import NotificationList from "./components/notification_list";
import SideBar from "../Wishlist/partials/sideBar";

const Notification = function()
{
  const notifications = [
    {
      id: 1,
      user_first_name: 'John',
      category: 'General',
      content: 'Notification content 1'
    },
    {
      id: 2,
      user_first_name: 'Jane',
      category: 'Urgent',
      content: 'Notification content 2'
    },
    {
      id: 3,
      user_first_name: 'Doe',
      category: 'Info',
      content: 'Notification content 3'
    }
    // Add more notifications as needed
  ];
  return(
    <>
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <SideBar/>

      <div className="col-span-9 space-y-4">
        <NotificationList notifications={notifications}/>
      </div>
    </div>
    </>
  )
}
export default Notification;
