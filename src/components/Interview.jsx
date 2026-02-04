import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from "react-icons/fa";

const Interview = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);

  // Start camera & mic
  const startMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;
      videoRef.current.srcObject = stream;

      setCameraOn(true);
      setMicOn(true);
    } catch (err) {
      alert("Camera/Mic permission denied");
    }
  };

  // Toggle Camera
  const toggleCamera = () => {
    const videoTrack = streamRef.current?.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setCameraOn(videoTrack.enabled);
    }
  };

  // Toggle Mic
  const toggleMic = () => {
    const audioTrack = streamRef.current?.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setMicOn(audioTrack.enabled);
    }
  };

  // Stop all media
  const stopMedia = () => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    setCameraOn(false);
    setMicOn(false);
  };

  // End Interview
  const endInterview = () => {
    stopMedia();
    navigate("/result");
  };

  useEffect(() => {
    startMedia();
    return () => stopMedia();
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>AI Interview Session</h1>
      <p style={styles.subtext}>
        WebRTC based camera & microphone monitoring
      </p>

      <div style={styles.videoBox}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={styles.video}
        />
      </div>

      <div style={styles.controls}>
        <button style={styles.btn} onClick={toggleCamera}>
          {cameraOn ? <FaVideo /> : <FaVideoSlash />} &nbsp;
          {cameraOn ? "Camera ON" : "Camera OFF"}
        </button>

        <button style={styles.btn} onClick={toggleMic}>
          {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />} &nbsp;
          {micOn ? "Mic ON" : "Mic OFF"}
        </button>

        <button style={{ ...styles.btn, background: "#ff4d4d" }} onClick={endInterview}>
          End Interview
        </button>
      </div>
    </div>
  );
};

export default Interview;

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#6f7bd9",
    textAlign: "center",
    padding: "30px",
  },
  heading: {
    color: "#ffffff",
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  subtext: {
    color: "#eaeaea",
    fontSize: "16px",
    marginBottom: "25px",
  },
  videoBox: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#000",
    borderRadius: "16px",
    padding: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  video: {
    width: "100%",
    borderRadius: "12px",
  },
  controls: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  btn: {
    padding: "12px 18px",
    fontSize: "15px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
};
