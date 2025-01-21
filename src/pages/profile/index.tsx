import CommonLayout from "@/layouts/common-layout";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
 return (
  <CommonLayout title="Profile">
   <section className="h-screen items-center justify-center flex flex-col">
    <h1 className="text-4xl font-bold">Profile</h1>
   </section>
  </CommonLayout>
 );
};

export default ProfilePage;
