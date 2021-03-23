import React from "react";
import "../../scss/education/videoComponent.scss";
import ReactPlayer from 'react-player'

const EducationVideoLessons = () => {
    return (
        <>
            <div className="generalVideo">
                <ReactPlayer
                    url='https://myudssystemsstorageprod.blob.core.windows.net/uds-portal/education/courses/ms-dynamics-365-consultant/block1/1.Jira.mp4?sp=r&st=2021-03-22T08:45:29Z&se=2021-03-31T15:45:29Z&spr=https&sv=2020-02-10&sr=b&sig=W8PLkmgXvt5b8z3B7esUByiOYiesDqav9qpzEMlalR8%3D'
                    muted={false}
                    playing={false}
                    width={754}
                    height={482}
                />
                <div className={"controlsWrapper"}>
                    <h3>Video title</h3>
                    <div className={"rewindButtons"}>
                        <button>Play rewind</button>
                        <button>Play</button>
                        <button>Play fast forward</button>
                    </div>
                    <div>
                        <p>timeline</p>
                    </div>
                    <div className={"playBottomBar"}>
                        <button>Play</button>
                        <button>Volume slider</button>
                        <span>time</span>
                        <button>accordeon with speed</button>
                        <button>full screen button</button>
                    </div>



                </div>
            </div>
        </>
    );
};

export default EducationVideoLessons;
