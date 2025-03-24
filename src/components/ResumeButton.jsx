// DownloadResumeButton.js
import React from 'react';

function ResumeButton() {
  const resumePath = '/resume/Rakesh_m.pdf'; // Replace with the actual path to your resume

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePath;
    anchor.download = 'Rakesh_Resume.pdf'; // The name for the downloaded file
    anchor.click();
  };

  return (
    <button onClick={handleDownload} style={{cursor:"pointer" ,color:"white",backgroundColor:"black",width:"200px",margin:"10px",borderRadius:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"5px"}}>Download Resume</button>
  );
}

export default ResumeButton;
