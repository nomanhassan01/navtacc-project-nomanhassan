import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

function Profile() {
  const { profile } = useAuth();

  return (
    <section className="text-gray-600 body-font bg-gray-300 overflow-hidden">
      <div className="container mx-auto px-5 py-24">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
          <img
            alt="Profile"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={profile?.profilePhoto}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-5xl title-font font-medium mb-1 text-center">Profile</h1>
            <div className="mt-6 p-5 rounded-lg bg-gray-900  border-2 border-yellow-500 mb-5">
              <h2 className="text-3xl mb-4 text-yellow-500">Username: {profile?.username}</h2>
              <h2 className="text-3xl mb-4 text-yellow-500">Email: {profile?.email}</h2>
              <h2 className="text-3xl mb-4 text-yellow-500">Address: {profile?.address}</h2>
              <h2 className="text-3xl mb-4 text-yellow-500">Contact: {profile?.contact}</h2>
              <h2 className="text-3xl mb-4 text-yellow-500">Role: {profile?.role}</h2>
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-gray-900 text-2xl border-yellow-500  border-2 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-black hover:font-bold rounded">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
