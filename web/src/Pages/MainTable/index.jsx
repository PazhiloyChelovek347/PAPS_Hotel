import React, {
  useEffect,
  useState,
} from 'react';
import Header from 'src/Components/Header';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import HotelTable from 'src/Components/Table';
import { Container } from '@mui/material';
import {
  createStyles,
  makeStyles,
} from '@mui/styles';
import HotelModal from 'src/Components/Modals/HotelModal';
import ConfirmModal from 'src/Components/Modals/ConfirmModal';
import BookingsTable from 'src/Components/BookingsTable';
import { getHotelsRequest } from '../../app/actions/hotels';

const useStyles = makeStyles(() => createStyles({
  tableContainer: {
    marginTop: 50,
  },
}));

function MainTable() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelsReducer?.hotels);
  const bookings = useSelector((state) => state.userReducer?.bookings);
  const bookingsArray = JSON.parse(localStorage.getItem('Users')).map((u) => u.bookings);
  const users = JSON.parse(localStorage.getItem('Users'));
  const classes = useStyles();
  const [allForModal, setAllForModal] = useState({});
  const [allConfirm, setAllConfirm] = useState({ open: false, toggleOpen: () => {} });
  const [confirm, setConfirm] = React.useState(false);

  useEffect(() => {
    dispatch(getHotelsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={classes.tableContainer}>
        <HotelModal
          allForModal={allForModal}
          confirm={confirm}
          setAllConfirm={setAllConfirm}
        />
        <ConfirmModal
          allForModal={{
            ...allConfirm,
            toggleOpen: () => setAllConfirm((p) => ({ ...p, open: !p.open })),
          }}
          setConfirm={setConfirm}
        />
        {!bookings && (
        <HotelTable
          rows={hotels}
          setAllForModal={setAllForModal}
        />
        )}
        {bookings && (
        <BookingsTable
          setAllForModal={setAllForModal}
          setAllConfirm={setAllConfirm}
          hotels={hotels}
          users={users}
        />
        )}
      </Container>
    </>
  );
}

export default MainTable;
