import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilterValue = state => state.contacts.filter;
const getAllcontacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getFilterValue, getAllcontacts],
  (filter, allContacts) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getAllcontacts,
  getFilterValue,
  getVisibleContacts,
};
