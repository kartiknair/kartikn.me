import { useEffect } from "react";

const useCloudinary = (cloudname) => {
  useEffect(() => {
    const cl = cloudinary.Cloudinary.new({ cloud_name: cloudname });
    cl.responsive();
  }, [cloudname]);
};

export default useCloudinary;
