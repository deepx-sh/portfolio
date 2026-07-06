import { ImageResponse } from "next/og"
import { profile } from "@/lib/data/profile"

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0b0c0e",
                    color: "#8b8f96",
                    fontFamily:"sans-serif"
                }}
            >

                <div style={{ fontSize: 28, color: "#8b8f96", marginBottom: 16 }}>
                    {profile.handle}
                </div>

                <div style={{ fontSize: 64, fontWeight: 700 }}>{profile.name}</div>
                <div style={{ fontSize: 28, color: "#8b8f96", marginTop: 16 }}>
                    Full Stack Developer - React · TypeScript · Node.js · Express.js · MongoDB
                </div>
            </div>
        ),
        {...size},
    )
}