import { IconCopyright } from "@tabler/icons";

export default function Copyright() {
  return (
    <p className="copyright">
      Designed and built by me
      <IconCopyright
        style={{ marginLeft: "0.25em", marginRight: "0.25em" }}
        stroke={1.5}
      />
      Alexandre Sparton
    </p>
  );
}
