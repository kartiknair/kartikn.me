import { useEffect } from "react";

export const useCloudinaryAndScroll = (cloudname) => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const cl = cloudinary.Cloudinary.new({ cloud_name: cloudname });
    cl.responsive();
  }, []);
};
