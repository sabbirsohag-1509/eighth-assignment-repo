import React, { useEffect, useState } from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { RiDownload2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const InstallationApp = () => {


  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(savedApps);
  }, []);


 const parseDownloads = (value) => {
    if (!value)
       return 0;
    value = value.toUpperCase();
    if (value.includes('M')) {
      return parseFloat(value) * 1000000;
    } else if (value.includes('K')) {
      return parseFloat(value) * 1000;
    } else {
      return parseFloat(value);
    }
  };


   const sortedItem = () => {
    if (sortOrder === 'ascending') {
      return [...installedApps].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
    } else if (sortOrder === 'descending') {
      return [...installedApps].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
    }
    return installedApps;
  };

  const displayedApps = sortedItem();



                        // Uninstall App btn function work here 

const handleUninstallBtn = (appId, appTitle) =>{

    const updatedUI = installedApps.filter(app => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedUI));
    setInstalledApps(updatedUI);

    Swal.fire({
    title: `${appTitle} Uninstalled Successfully!`,
    icon: "success",
    timer: 2000,
    showConfirmButton: false
  });
}



  return (

    <div className="max-w-6xl mx-auto mt-10 px-3">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Your Installed Applications
      </h1>
      <p className="text-gray-600 text-center text-sm lg:text-lg">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 border border-gray-100 px-5 py-2 rounded-xl mt-5">
        <p className="text-gray-800 font-semibold text-lg underline decoration-2 decoration-[#632EE3]">
          <span className="text-[#632EE3]">({installedApps.length})</span> Apps Found
        </p>
                      {/* sort-section  */}

        <select onChange={(e)=>setSortOrder(e.target.value)} value={sortOrder} className="select select-success w-44 mt-5 md:mt-0 lg:mt-0">
          <option >Sort By Downloads</option>
          <option value='descending'>High to Low</option>
          <option value='ascending'>Low to High</option>
        </select>
      </div>


      <div className="w-full border-b border-gray-400 mt-4"></div>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-8">
          No apps installed yet.......
        </p>
      ) : (
        <div className="space-y-4 mt-8">
          {displayedApps.map(app => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-gray-200 p-4 rounded-lg shadow-lg w-full"
            >
                             {/* img */}
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 rounded-md object-cover"
                  src={app.image}
                  alt={app.title}
                />
                <div>
                  <h1 className="text-lg font-semibold text-gray-800">
                    {app.title}
                  </h1>

                  <div className="flex gap-4 items-center mt-2">
                    <div className="flex items-center gap-1 text-sm text-green-600 font-bold">
                      <RiDownload2Fill />
                      <p>{app.downloads}</p>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-amber-500 font-bold">
                      <MdOutlineStarPurple500 />
                      <p>{app.ratingAvg}</p>
                    </div>

                    <p className="font-bold text-sm text-gray-700">{app.size}</p>
                  </div>
                </div>
              </div>

              {/* uninsstall btn */}

              <button onClick={()=>handleUninstallBtn(app.id, app.title)} className="mt-4 sm:mt-0 px-5 py-2 bg-[#00d390b8] hover:bg-[#00D390] text-white rounded-md text-sm font-semibold transition cursor-pointer btn">
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
 
};

export default InstallationApp;
