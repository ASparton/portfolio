import { IconCopyright } from "@tabler/icons";

export default function Copyright() {
  return (
    <p
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.15em",
        color: "whitesmoke",
      }}
    >
      Handcrafted by me
      <IconCopyright
        style={{ marginLeft: "0.25em", marginRight: "0.25em" }}
        stroke={1.5}
      />
      asparton
    </p>
  );
}
