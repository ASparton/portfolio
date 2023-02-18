import { IconFaceIdError } from "@tabler/icons";

export default function NotFound() {
  return (
    <div
      style={{
        width: "99.125vw",
        height: "60vh",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>This page does not exists</h1>
      <IconFaceIdError size={256} stroke={2} color="#4c6ef5" />
    </div>
  );
}
