// DownloadResumeButton.js
import React from 'react';

function ResumeButton() {
  const resumePath = '/resume/Rakeshm.pdf'; // Replace with the actual path to your resume

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePath;
    anchor.download = 'Resume.pdf'; // The name for the downloaded file
    anchor.click();
  };

  return (
    <button onClick={handleDownload} style={{color:"blue",backgroundColor:"white",width:"200px",margin:"10px",borderRadius:"10%"}}>Download Resume</button>
  );
}

export default ResumeButton;
