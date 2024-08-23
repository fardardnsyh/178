import React, { useRef, useState } from 'react';
import {
  AddWid,
  EditIcons,
  EditSvg,
  Field,
  FieldDesc,
  FieldIndex,
  FieldName,
  IdContainer,
  Polygon,
  WidgetField,
  WidgetsListItem,
} from './WidgetsList.styled';
import { ReactComponent as PolygonIcon } from '../../../../assets/icons/polygon.svg';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/delete.svg';
import AddWidget from '../add/AddWidget';
import { InfoDialog } from '../../../../theme/global';
import InfoWidget from '../info/InfoWidget';

export default function WidgetsList({
  id,
  widgets,
  data,
  setColumns,
  activeCol,
  prevActiveCol,
  setPrevActiveCol,
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState(null);

  const ref = useRef();
  const toggleDisplay = () => {
    ref.current.classList.toggle('none');
  };

  return (
    <div>
      <Field>
        <FieldName>
          <Polygon as={PolygonIcon} onClick={(event) => toggleDisplay(event)} />
          widgets:
        </FieldName>
        [{widgets.length}]
      </Field>
      <div ref={ref}>
        <AddWid onClick={() => setOpenDialog(true)}>+ Добавить виджет</AddWid>
        {widgets.map((widget, index) => (
          <WidgetField
            key={widget}
            onClick={() => {
              setColumns((prev) => {
                let newValue = prev;
                if (activeCol >= prevActiveCol) {
                  //newValue = prev.slice(1, 3);
                  newValue.push(widget);
                } else if (activeCol === 0 && activeCol < prevActiveCol) {
                  newValue = prev.slice(0, -1);
                }
                return Array.from(new Set(newValue));
              });
              setPrevActiveCol(activeCol);
            }}
          >
            <WidgetsListItem>
              <FieldIndex>{index}: </FieldIndex>
              <div>
                <IdContainer>{widget}</IdContainer>
                <FieldDesc>({data[widget] ? data[widget].text : ''})</FieldDesc>
              </div>
              <EditIcons>
                <EditSvg
                  as={EditIcon}
                  onClick={() => {
                    setSelectedWidget(data[widget]);
                    setOpenInfoDialog(true);
                  }}
                />
                <EditSvg as={DeleteIcon} />
              </EditIcons>
            </WidgetsListItem>
          </WidgetField>
        ))}
      </div>
      <InfoDialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <AddWidget
          selectedId={id}
          allWidgets={data}
          setOpenDialog={setOpenDialog}
        />
      </InfoDialog>
      <InfoDialog
        open={openInfoDialog}
        onClose={() => setOpenInfoDialog(false)}
      >
        <InfoWidget
          widget={selectedWidget}
          setOpenInfoDialog={setOpenInfoDialog}
        />
      </InfoDialog>
    </div>
  );
}
