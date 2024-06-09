import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    
      <Layout>
      {user && (
        <div className="p-10">
          <h1 className="text-2xl text-gray-600 mb-5 font-semibold">User Profile</h1>
          <div className="bg-white rounded-lg shadow-lg p-5">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Created At:</strong> {user.createdAt.slice(0, 10)}</p>
            <div className="flex justify-end mt-5">
              <button className="px-5 py-2 bg-blue-500 text-white text-sm" onClick={() => console.log("Edit profile clicked")}>Edit Profile</button>
            </div>
          </div>
        </div>
      )}
    </Layout>

  );
}
export default Profile;

