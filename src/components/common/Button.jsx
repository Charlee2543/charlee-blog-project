const Button = ({ link, nameButton, className }) => {
   return (
      <a
         href={link}
         className={`px-4 py-2 rounded-full border border-black max-md:border-2 text-center ${className}`}
      >
         {nameButton}
      </a>
   );
};
export default Button;
