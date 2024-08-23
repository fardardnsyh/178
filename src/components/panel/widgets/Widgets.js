import React, { useEffect, useState } from 'react';
import {
  ArrowSvg,
  Container,
  EditIcons,
  EditSvg,
  Field,
  FieldName,
  FlexContainer,
  Header,
  HeaderSection,
  HomeSvg,
  Icon,
  Title,
  Widget,
  WidgetContent,
  WidgetTitle,
  WidgetsContainer,
} from './Widgets.styled';
import WidgetsList from './list/WidgetsList';
import { ReactComponent as WidgetIcon } from '../../../assets/icons/widget.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';
import { InfoDialog } from '../../../theme/global';
import InfoField from './info/InfoField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWidgetsData } from '../../../actions/Actions';
import { IdContainer } from './list/WidgetsList.styled';

export default function Widgets() {
  const dispatch = useDispatch();
  const { status, widgets } = useSelector((state) => state.widgets);
  const arrWidgets = widgets ? Object.values(widgets) : [];

  const [columns, setColumns] = useState(null);
  const showColumns = () => {
    if (!columns) return [];
    if (columns.length <= 3) return columns;
    return columns.slice(-3);
  };
  const [prevActiveCol, setPrevActiveCol] = useState(-1);

  const [openFieldDialog, setOpenFieldDialog] = useState(false);
  const [selectedField, setSelectedField] = useState('');

  console.log(widgets);
  useEffect(() => {
    console.log('inside hook');
    if (!columns) {
      setColumns(
        arrWidgets ? arrWidgets.slice(0, 1).map((widget) => widget.id) : [],
      );
    }
  }, [arrWidgets]);

  useEffect(() => {
    dispatch(fetchWidgetsData());
  }, [dispatch]);

  return (
    <div>
      <Title>Виджеты</Title>
      <Container>
        {columns ? (
          <>
            <Header>
              <HomeSvg as={HomeIcon} />
              {showColumns().map((id) =>
                id ? (
                  <FlexContainer key={id}>
                    <ArrowSvg as={ArrowIcon} />
                    <HeaderSection>
                      {widgets[id] ? widgets[id].text : ''}
                    </HeaderSection>
                  </FlexContainer>
                ) : null,
              )}
            </Header>
            <WidgetsContainer>
              {showColumns().map((id, index) => {
                const widgetText = widgets[id] ? widgets[id].text : '';
                const widgetResponse = widgets[id] ? widgets[id].response : '';
                const widgetList = widgets[id] ? widgets[id].widgets : [];

                return id ? (
                  <Widget key={id} $type={index === 2 ? 'large' : 'small'}>
                    <WidgetTitle>
                      <Icon as={WidgetIcon} />
                      {widgetText}
                    </WidgetTitle>
                    <WidgetContent>
                      <Field>
                        <FieldName>text:</FieldName>
                        {widgetText}
                        <EditIcons>
                          <EditSvg
                            as={EditIcon}
                            onClick={() => {
                              setSelectedField(widgetText);
                              setOpenFieldDialog(true);
                            }}
                          />
                          <EditSvg as={DeleteIcon} />
                        </EditIcons>
                      </Field>
                      <Field>
                        <FieldName>response:</FieldName>
                        {widgetResponse}
                        <EditIcons>
                          <EditSvg
                            as={EditIcon}
                            onClick={() => {
                              setSelectedField(widgetResponse);
                              setOpenFieldDialog(true);
                            }}
                          />
                          <EditSvg as={DeleteIcon} />
                        </EditIcons>
                      </Field>
                      <WidgetsList
                        id={id}
                        widgets={widgetList}
                        data={widgets}
                        setColumns={setColumns}
                        activeCol={index}
                        prevActiveCol={prevActiveCol}
                        setPrevActiveCol={setPrevActiveCol}
                      />
                      <Field>
                        <FieldName>id:</FieldName>
                        <IdContainer>{id}</IdContainer>
                      </Field>
                    </WidgetContent>
                  </Widget>
                ) : null;
              })}
            </WidgetsContainer>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Container>
      <InfoDialog
        open={openFieldDialog}
        onClose={() => setOpenFieldDialog(false)}
      >
        <InfoField
          field={selectedField}
          setOpenFieldDialog={setOpenFieldDialog}
        />
      </InfoDialog>
    </div>
  );
}
