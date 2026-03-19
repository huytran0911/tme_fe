"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import {
    getMyAddresses,
    createMyAddress,
    updateMyAddress,
    deleteMyAddress,
    setMyDefaultAddress,
    type AddressListItem,
    type CreateAddressRequest,
    type UpdateAddressRequest,
} from "@/lib/api/addresses";

const ADDRESSES_KEY = "my-addresses";

/** Get all addresses of current customer */
export function useAddresses() {
    const { isAuthenticated } = useAuth();

    return useQuery<AddressListItem[]>({
        queryKey: [ADDRESSES_KEY],
        queryFn: getMyAddresses,
        enabled: isAuthenticated,
        staleTime: 2 * 60 * 1000, // 2 minutes
        retry: 1,
    });
}

/** Create a new address */
export function useCreateAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (request: CreateAddressRequest) => createMyAddress(request),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ADDRESSES_KEY] });
        },
    });
}

/** Update an address */
export function useUpdateAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, request }: { id: number; request: UpdateAddressRequest }) =>
            updateMyAddress(id, request),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ADDRESSES_KEY] });
        },
    });
}

/** Delete an address */
export function useDeleteAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteMyAddress(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ADDRESSES_KEY] });
        },
    });
}

/** Set an address as default */
export function useSetDefaultAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => setMyDefaultAddress(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ADDRESSES_KEY] });
        },
    });
}
