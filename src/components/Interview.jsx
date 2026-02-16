import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";

import "./Interview.css";

const Interview = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);

  // Start Camera & Mic
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

  // Stop Media
  const stopMedia = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
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
    <div className="interview-container">
      <div className="header glass">
        <h1 className="title">AI Interview Session</h1>
        <p className="subtitle">
          WebRTC based camera & microphone monitoring
        </p>
      </div>

      <div className="video-card glass">
        <video ref={videoRef} autoPlay muted playsInline className="video" />
      </div>

      <div className="controls">
        <button className="btn blue" onClick={toggleCamera}>
          {cameraOn ? <FaVideo /> : <FaVideoSlash />}
          {cameraOn ? "Camera ON" : "Camera OFF"}
        </button>

        <button className="btn blue" onClick={toggleMic}>
          {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
          {micOn ? "Mic ON" : "Mic OFF"}
        </button>

        <button className="btn red" onClick={endInterview}>
          End Interview
        </button>
      </div>
    </div>
  );
};

export default Interview;
