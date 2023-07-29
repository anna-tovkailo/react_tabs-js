import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, callbackTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              { 'is-active': selectedTab.id === tab.id },
            )}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => callbackTabSelected(tab)}
            >
              { tab.title }
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      { selectedTab.content }
    </div>
  </div>
);
