const Button = ({ link, nameButton }) => {
	return (
		<a
			href={link}
			className="px-4 py-2 rounded-full  border bg-white  max-md:border-0"
		>
			{nameButton}
		</a>
	);
};
export default Button;
