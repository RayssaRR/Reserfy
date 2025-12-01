package app_back_end.maintenance.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app_back_end.maintenance.entity.Maintenance;
import app_back_end.maintenance.entity.MaintenanceStatus;
import app_back_end.maintenance.repository.MaintenanceRepository;
import app_back_end.resource.entity.RecursoInterno;
import app_back_end.resource.entity.StatusEnum;
import app_back_end.resource.repository.RecursoInternoRepository;

@Service
public class MaintenanceService {

    @Autowired
    private MaintenanceRepository maintenanceRepository;

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;

    public Maintenance create(Maintenance maintenance) {

        RecursoInterno resource = recursoInternoRepository.findById(maintenance.getResource().getId())
                .orElseThrow(() -> new RuntimeException("Recurso não encontrado!"));

       
        List<Maintenance> conflitos = maintenanceRepository
                .findByResource_IdAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
                        resource.getId(),
                        maintenance.getEndDate(),
                        maintenance.getStartDate()
                );

        if (!conflitos.isEmpty()) {
            throw new RuntimeException("O recurso já possui manutenção nesse período!");
        }

        // Alterar o status do recurso para EM_MANUTENCAO
        resource.setStatus(StatusEnum.EM_MANUTENCAO);
        recursoInternoRepository.save(resource);

        maintenance.setStatus(MaintenanceStatus.AGENDADA);

        return maintenanceRepository.save(maintenance);
    }

    public List<Maintenance> listAll() {
        return maintenanceRepository.findAll();
    }

    public Maintenance findById(Long id) {
        return maintenanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Manutenção não encontrada"));
    }

    public List<Maintenance> findByResource(Long resourceId) {
        return maintenanceRepository.findByResource_Id(resourceId);
    }

    public Maintenance updateStatus(Long id, MaintenanceStatus status) {
        Maintenance m = findById(id);
        m.setStatus(status);

        // Se concluir manutenção, liberar recurso
        if (status == MaintenanceStatus.CONCLUIDA) {
            RecursoInterno r = m.getResource();
            r.setStatus(StatusEnum.DISPONIVEL);
            recursoInternoRepository.save(r);
        }

        return maintenanceRepository.save(m);
    }
}