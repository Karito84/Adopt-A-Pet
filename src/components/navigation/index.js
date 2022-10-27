import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          {/* This link should have an activeClassName and exact prop in v5, BUT in v6 by default, an active class is added to a <NavLink> component when it is active. */}
          <NavLink
            end to="/" 
            className="nav-link"
          >
             {/* Have to add "end" to the NavLink instead of exact in v5, that way it will ensure this component isn't matched as "active" when its descendant paths are matched.*/}
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                {/* These links should have an activeClassName prop */}
                <NavLink
                  to={type.name}
                  key={type.name}
                  className="nav-link"
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
