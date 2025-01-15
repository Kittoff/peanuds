import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Filter } from "../../../types";

interface TableHeaderProps {
  title: string;
  filters?: Filter[];
}

export const TableHeader = ({ title, filters }: TableHeaderProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 2 }}
    >
      <Typography variant="h6">{title}</Typography>
      {filters && (
        <Stack direction="row" spacing={2}>
          {filters.map((filter, index) => (
            <FormControl key={index} sx={{ minWidth: 120 }} size="small">
              <InputLabel id={`${filter.label}-select-label`}>
                {filter.label}
              </InputLabel>
              <Select
                labelId={`${filter.label}-select-label`}
                value={filter.value}
                label={filter.label}
                onChange={(e: SelectChangeEvent) =>
                  filter.onChange(e.target.value)
                }
                variant="outlined"
              >
                {filter.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
