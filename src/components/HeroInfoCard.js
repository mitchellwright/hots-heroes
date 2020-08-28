import React, { useContext } from "react";
import { HeroContext } from "../contexts/HeroContext";

const HeroInfoCard = () => {
  const { state } = useContext(HeroContext);

  return (
    <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Hero Information
        </h3>
      </div>
      <div className="px-4 py-5 sm:p-0">
        <dl>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Hero Image
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <img src={state.hero.iconUrl} alt={state.hero.name} />
            </dd>
          </div>
          <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Hero Name
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {state.hero.name}
            </dd>
          </div>
          <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Role
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {state.hero.role}
            </dd>
          </div>
          <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Type{" "}
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {state.hero.type}
            </dd>
          </div>
          <div className="px-4 py-5 border-t border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Skills
            </h3>
          </div>
          {state.hero.abilities
            ? state.hero.abilities.map((ability, index) => {
                return (
                  <div
                    key={index}
                    className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                  >
                    <dt className="text-sm leading-5 font-medium text-gray-500">
                      {ability.title}{" "}
                    </dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      {ability.description}
                    </dd>
                  </div>
                );
              })
            : ""}
        </dl>
      </div>
    </div>
  );
};

export default HeroInfoCard;
