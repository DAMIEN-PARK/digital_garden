using UnityEngine;

public class follow : MonoBehaviour
{
    [SerializeField] private Transform target;           // 따라다닐 캐릭터의 Transform
    [SerializeField] private float distance = 5.0f;      // 카메라와 캐릭터 사이의 거리
    [SerializeField] private float height = 2.0f;        // 카메라의 높이
    [SerializeField] private float smoothSpeed = 10.0f;  // 카메라 이동 부드러움 정도
    
    [SerializeField] private Vector3 offset = new Vector3(0, 0, 0);  // 추가 오프셋 (미세 조정용)
    
    private void LateUpdate()
    {
        if (target == null)
        {
            Debug.LogWarning("카메라 타겟이 설정되지 않았습니다!");
            return;
        }
        
        // 캐릭터 뒤쪽 위치 계산
        Vector3 desiredPosition = target.position - target.forward * distance + Vector3.up * height + offset;
        
        // 카메라 부드럽게 이동
        Vector3 smoothedPosition = Vector3.Lerp(transform.position, desiredPosition, smoothSpeed * Time.deltaTime);
        transform.position = smoothedPosition;
        
        // 카메라가 항상 캐릭터를 바라보도록 설정
        transform.LookAt(target.position + Vector3.up * 1.5f);
    }
}
