/* eslint-disable react/prop-types */
const Link = ({route}) => {
    return (
        <div>
             <li className="mr-10 hover:bg-yellow-500 px-6">
            <a href={route.path}>{route.name}</a>
          </li>
        </div>
    );
};

export default Link;