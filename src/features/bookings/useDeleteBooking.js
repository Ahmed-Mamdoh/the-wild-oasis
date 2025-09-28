import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: (data) => {
      toast.success(`Booking deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("there was an error while Deleting");
    },
  });
  return { deleteBooking, isDeletingBooking };
}
