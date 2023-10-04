import { PropsWithChildren } from "react";

interface IModalProps extends PropsWithChildren {
  title: string;
}

const Modal = (props: IModalProps) => {
  return (
    <div className=" max-w-2xl mx-auto rounded-lg bg-slate-100 m-10 shadow-lg">
      <h2 className="w-full text-white font-bold text-lg px-3 py-1 bg-blue-500 rounded-t-lg">{props.title}</h2>
      <div className="p-3">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;