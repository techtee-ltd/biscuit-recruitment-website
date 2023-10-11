const HamburgerMenu = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M12 32v-2.667h24V32H12Zm0-6.667v-2.666h24v2.666H12Zm0-6.666V16h24v2.667H12Z"
    />
  </svg>
);
export default HamburgerMenu;
