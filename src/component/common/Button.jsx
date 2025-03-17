const Button = ({ link, nameButton }) => {
	return (
		<a href={link} className="px-4 py-2 rounded-full border">
			{nameButton}
		</a>
	);
};
export default Button;
