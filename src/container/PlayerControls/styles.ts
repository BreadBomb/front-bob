import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const PlayerControlsStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontWeight: "bold"
        },
        textSecondary: {
            color: theme.palette.text.secondary
        }
    }),
);
