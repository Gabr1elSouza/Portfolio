import Style from "./MyStack.module.css";

export default function MyStack() {
  return (
    <div className={Style.myStack}>
      <p>My Stacks</p>
      <div className={Style.icons}>
        <a href="#">
          <i class="fa-brands fa-react"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-html5"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-css3-alt"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-node"></i>
        </a>
      </div>
    </div>
  );
}
