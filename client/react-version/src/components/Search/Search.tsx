import { Grid, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.styles';

interface Props {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: React.ComponentState;
}

const Search = ({ handleSearch, search }: Props): React.ReactElement => {
  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <TextField
          onChange={handleSearch}
          name="search"
          value={search}
          fullWidth
          sx={styles.search}
        />
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};

export default Search;
