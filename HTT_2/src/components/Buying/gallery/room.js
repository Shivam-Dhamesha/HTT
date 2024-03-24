import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
    const { roomId } = useParams();
    const zegoContainerRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            const appID = 776498959;
            const serverSecret = "91106df72570cb2e6c796a63e55c3f87";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Shivam");
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: zegoContainerRef.current, // Use the ref here
                senario: {
                    mode: ZegoUIKitPrebuilt.VideoConference
                }
            });
        };

        myMeeting(); // Call the function when component mounts
    }, [roomId]); // Include roomId in the dependency array to re-run the effect when it changes

    return (
        <div style={{ marginTop: "90px", marginBottom: "250px" }}>
            {/* Use the ref here */}
            <div ref={zegoContainerRef} style={{ width: "100%", height: "500px" }}></div>
        </div>
    );
}

export default Room;