import { addWidget, updateWidget } from '../../../../../actions/Actions';

export const addNewWidget = (
  dispatch,
  selectedId,
  allWidgets,
  id,
  text,
  response,
  widgets,
) => {
  dispatch(addWidget({ id, text, response, widgets }));
  const widgetsList = allWidgets[selectedId]
    ? allWidgets[selectedId].widgets
    : [];

  dispatch(
    updateWidget(selectedId, {
      ...allWidgets[selectedId],
      widgets: [...widgetsList, id],
    }),
  );
};
