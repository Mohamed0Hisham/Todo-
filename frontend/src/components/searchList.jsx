/* eslint-disable react/prop-types */


const SearchList = ({index,text}) => {
	return <li className="p-1 mb-1 "  key={index}>{text}</li>;
};

export default SearchList;
